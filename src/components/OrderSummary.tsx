import type { Skip } from '../types/skip';
import { calculateTotalPrice, formatPrice } from '../utils/skipUtils';

interface OrderSummaryProps {
    selectedSkip: Skip | null;
}

export const OrderSummary = ( { selectedSkip }: OrderSummaryProps ) => {
    if ( !selectedSkip ) {
        return (
            <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                <p className="text-gray-500 text-center py-8">Please select a skip to see the order summary</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Skip Size</span>
                    <span className="font-semibold text-gray-800">{selectedSkip.size} Yards</span>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Hire Period</span>
                    <span className="font-semibold text-gray-800">{selectedSkip.hire_period_days} days</span>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-semibold text-gray-800">{formatPrice( selectedSkip.price_before_vat )}</span>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">VAT ({selectedSkip.vat}%)</span>
                    <span className="font-semibold text-gray-800">{formatPrice( calculateTotalPrice( selectedSkip.price_before_vat, selectedSkip.vat ) - selectedSkip.price_before_vat )}</span>
                </div>
                
                <div className="flex justify-between py-3 text-lg">
                    <span className="font-bold text-gray-800">Total Price</span>
                    <span className="font-bold text-gray-800">{formatPrice( calculateTotalPrice( selectedSkip.price_before_vat, selectedSkip.vat ) )}</span>
                </div>
            </div>
            
            <button className="w-full mt-8 px-6 py-4 bg-gradient-to-br from-green-500 to-green-600 text-white font-bold rounded-xl
                hover:from-green-600 hover:to-green-700 transform transition-all duration-200
                hover:shadow-lg hover:shadow-green-100 hover:-translate-y-0.5
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
                Continue to Booking →
            </button>
        </div>
    );
};
