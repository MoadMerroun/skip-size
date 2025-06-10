export const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-100" />
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-200" />
            </div>
            <h2 className="text-xl font-semibold">Finding available skips...</h2>
        </div>
    );
};