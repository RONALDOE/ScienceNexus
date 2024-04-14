import React from 'react';

interface UserImageProps {
    Image?: string | null;
    Initials: string;
}

const UserImage: React.FC<UserImageProps> = (props) => {
    // Función para obtener las iniciales según la cantidad de palabras en el texto
    const getInitials = (text: string): string => {
        let words = text.trim().split(' ');
        if (words.length === 1) {
            words = words.join('').split('');
            // Dos palabras: Devolver las iniciales de ambas palabras
            return words[0].toUpperCase() + words[1].toUpperCase();}
        else if (words.length === 2) {
            // Dos palabras: Devolver las iniciales de ambas palabras
            return words[0][0].toUpperCase() + words[1][0].toUpperCase();
        } else if (words.length > 2) {
            // Más de dos palabras: Devolver las iniciales de la primera y la penúltima palabra
            return words[0][0].toUpperCase() + words[words.length - 2][0].toUpperCase();
        } else {
            // Una palabra o ninguna: Devolver las iniciales de la primera palabra
            return words[0][0].toUpperCase();
        }
    };

    // Obtener las iniciales según la cantidad de palabras en Initials
    const initials = getInitials(props.Initials);

    return (
        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-300">
            {props.Image != null ? (
                <img src={props.Image} alt="User" className="rounded-full w-full h-full object-cover" />
            ) : (
                <span className="text-white text-xl">{initials}</span>
            )}
        </div>
    );
};

export default UserImage;
