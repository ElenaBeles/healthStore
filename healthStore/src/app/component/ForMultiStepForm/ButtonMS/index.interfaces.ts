export interface IButtonMS {
    title: string,
    type: 'submit' | 'button',
    className?: string,
    onClick?: (e: any) => void;
}