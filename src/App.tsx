import { useEffect, useState } from "react";
import type { Skip } from './types/skip';
import { fetchSkipsByLocation } from './services/skipService';
import { LoadingSpinner } from './components/LoadingSpinner';
import { SkipCard } from './components/SkipCard';
import { OrderSummary } from './components/OrderSummary';

const POSTCODE = 'NR32';
const AREA = 'Lowestoft';

const App = () => {
    const [ skips, setSkips ] = useState<Skip[]>( [] );
    const [ selectedSkip, setSelectedSkip ] = useState<Skip | null>( null );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState<string | null>( null );

    useEffect(
        () => { fetchSkips(); }, []
    );

    const fetchSkips = async () => {
        try {
            setLoading( true );

            setError( null );

            const data = await fetchSkipsByLocation( POSTCODE, AREA );

            setSkips( data );

            if ( data.length > 0 ) setSelectedSkip( data[ 0 ] );

        } catch ( err ) {
            setError( err instanceof Error ? err.message : 'An unexpected error occurred' );

        } finally {
            setLoading( false );
        }
    };

    if ( loading ) {
        return <LoadingSpinner />;
    }

    if ( error ) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
                <p className="text-gray-600 mb-4">{error}</p>
                <button
                    onClick={fetchSkips}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <header className="bg-gradient-to-br from-slate-800 to-slate-700 text-white py-8 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <nav className="flex items-center gap-2 text-sm opacity-80 mb-4">
                        <div className="flex items-center gap-1">
                            <span>🏠</span>
                            <span>Postcode</span>
                        </div>
                        <span>→</span>
                        <div className="flex items-center gap-1">
                            <span>🗑️</span>
                            <span>Waste Type</span>
                        </div>
                        <span>→</span>
                        <div className="flex items-center gap-1">
                            <span>🚚</span>
                            <span>Select Skip</span>
                        </div>
                    </nav>
                    <h1 className="text-4xl font-extrabold tracking-tight mb-1">
                        Choose Your Skip Size
                    </h1>
                    <p className="text-lg opacity-90">Select the right skip for your project</p>
                </div>
                <div className="absolute inset-0 opacity-10" />
            </header>

            <main className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-[1fr_300px] gap-6">
                <div className="flex flex-col gap-4">
                    {skips.map( ( skip ) => (
                        <SkipCard
                            key={skip.id}
                            skip={skip}
                            isSelected={selectedSkip?.id === skip.id}
                            onSelect={ ( skip ) => selectedSkip?.id !== skip.id ? setSelectedSkip( skip ) : setSelectedSkip( null ) }
                        />
                    ))}
                </div>
                <OrderSummary selectedSkip={selectedSkip} />
            </main>
        </div>
    );
};

export default App;
