import useTextGeneratorController from "@/store/useTextGeneratorController";
import TextWrapper from "./TextWrapper";

function TextGenerator() {
    const { textObjects, toggleTextActive } = useTextGeneratorController();

    return (
        <>
            {textObjects?.map((textObject) => (
                <TextWrapper 
                    key={textObject.id} 
                    onClick={() => toggleTextActive(textObject.id)} 
                    {...textObject} 
                    />
            ))}
        </>
    )
}

export default TextGenerator