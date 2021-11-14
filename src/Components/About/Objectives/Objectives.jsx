import Objective from './Objective/Objective'

export default function Objectives() {
    return (
        <section className="flex gap-2 items-center justify-center w-4/5">
            <Objective
                src="https://media.discordapp.net/attachments/898423740273131570/909546597061378048/Team_meeting_Monochromatic.png"
                title="Trabajo en equipo"
                description="A trabajar con otras personas de manera productiva"
            />

            <Objective
                src="https://media.discordapp.net/attachments/898423740273131570/909546589536780358/Designer__Isometric.png"
                title="Diseño"
                description="Creacion de maquetas para diferentes sitios web"
            />

            <Objective
                src="https://media.discordapp.net/attachments/898423740273131570/909546597455646801/Progress__Outline.png"
                title="Programación de páginas"
                description="A programar desde 0 paginas usando tecnologias web"
            />
        </section>
    )
}