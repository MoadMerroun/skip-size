type SizeCategory = 'small' | 'medium' | 'large' | 'extra-large';
type Dimensions = {
    width: string;
    height: string;
};

export const calculateTotalPrice = ( price: number, vat: number ): number => {
    return Math.round( price * ( 1 + ( vat || 0 ) / 100 ) );
};

export const formatPrice = ( price: number ): string => `£${price}`;

export const getSizeCategory = ( size: number ): SizeCategory => {
    if ( size <= 4 ) return "small";
    if ( size <= 8 ) return "medium";
    if ( size <= 12 ) return "large";
    return "extra-large";
};

export const SKIP_DIMENSIONS: Record<SizeCategory, Dimensions> = {
    'small': { width: "w-[60px]", height: "h-[35px]" },
    'medium': { width: "w-[80px]", height: "h-[45px]" },
    'large': { width: "w-[100px]", height: "h-[55px]" },
    'extra-large': { width: "w-[120px]", height: "h-[65px]" }
};
