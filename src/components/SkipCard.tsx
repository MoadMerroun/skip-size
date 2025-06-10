import { SkipVisualization } from './SkipVisualization';
import type { Skip } from '../types/skip';
import { calculateTotalPrice, formatPrice } from '../utils/skipUtils';

interface SkipCardProps {
    skip: Skip;
    isSelected: boolean;
    onSelect: (skip: Skip) => void;
}

export const SkipCard = ( { skip, isSelected, onSelect }: SkipCardProps ) => {
    return (
        <div
            onClick={() => onSelect( skip )}
            className={`rounded-xl p-6 border-2 transition-all cursor-pointer relative ${
                isSelected
                    ? 'border-green-500 bg-green-50 shadow-green-200 shadow-md'
                    : 'border-transparent hover:border-slate-200 hover:shadow'
            }`}
        >
            {isSelected && (
                <div className="absolute top-2 right-4 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                </div>
            )}
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6">
                <SkipVisualization size={skip.size} isSelected={isSelected} />
                <div className="flex flex-col">
                    <div className="text-lg font-bold text-slate-800">
                        {skip.size} Yard Skip
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {skip.allows_heavy_waste && (
                            <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                                Heavy Waste
                            </span>
                        )}
                        {skip.allowed_on_road && (
                            <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded">
                                Road Permit OK
                            </span>
                        )}
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-extrabold text-slate-900">
                        {formatPrice( calculateTotalPrice( skip.price_before_vat, skip.vat ) )}
                    </div>

                    <div className="text-xs text-slate-500">incl. VAT</div>
                </div>
            </div>
        </div>
    );
};
