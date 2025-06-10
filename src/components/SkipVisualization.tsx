import type { SkipVisualizationProps } from '../types/skip';
import { getSizeCategory, SKIP_DIMENSIONS } from '../utils/skipUtils';

export const SkipVisualization = ( { size, isSelected }: SkipVisualizationProps ) => {
    const category = getSizeCategory( size );
    const dimensions = SKIP_DIMENSIONS[ category ];

    return (
        <div className="flex flex-col items-center gap-1">
            <div className={`relative flex items-end ${dimensions.width} ${dimensions.height}`}>
                <div
                    className={`w-full h-full rounded-t-md shadow-inner ${
                        isSelected
                            ? 'bg-gradient-to-br from-green-500 to-green-700'
                            : 'bg-gradient-to-br from-slate-400 to-slate-600'
                    }`}
                ></div>
                <div className="absolute top-1/4 left-[-4px] right-[-4px] flex justify-between">
                    <div
                        className={`w-2 h-3 rounded-sm ${
                            isSelected ? 'bg-green-800' : 'bg-slate-800'
                        }`}
                    ></div>
                    <div
                        className={`w-2 h-3 rounded-sm ${
                            isSelected ? 'bg-green-800' : 'bg-slate-800'
                        }`}
                    ></div>
                </div>
            </div>
            <div className="text-xs font-semibold text-slate-500">{size} YARDS</div>
        </div>
    );
};
