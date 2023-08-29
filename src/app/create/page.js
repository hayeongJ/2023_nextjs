import Image from 'next/image'
import img1 from "/public/images/gg.png";

export default function Create() {
    return(
        <>
            Create !
            <p><Image src={img1} /></p>
        </>
    );
}