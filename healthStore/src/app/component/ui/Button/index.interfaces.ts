export interface IButton {
    text: any;
    type?: "button" | "submit" | "reset";
    onClick?: (e : any) => void;
    disabled?: boolean;
    className?: string;
    status?: string;
}