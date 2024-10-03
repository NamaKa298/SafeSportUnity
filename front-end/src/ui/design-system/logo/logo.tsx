interface Props {
    size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {

    let sizeLogo: number;

    switch (size) {
        case "very-small":
            sizeLogo = 34;
            break;
        case "small":
            sizeLogo = 61;
            break;
        case "medium":
            sizeLogo = 88;
            break;
        case "large":
            sizeLogo = 140;
            break;
    }
    return (

    )
}