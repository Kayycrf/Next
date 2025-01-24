import { TeamHeader } from "@/components/header/team-header/team-header";
import { StartTeam } from "@/components/StartTeam";
import { Metadata } from "next";

interface Props {
    params: { id: string }
}

export async function genarateMetadata ({ params }: Props): Promise<Metadata> {
    return {
        title: params.id,
        description: params.id
    }

  };

export default function PageTeamDetail({}: Props) {
    return (
        <main className='mt-8 flex justify-center'>
            <div className='w-full max-w-full min-[800px]:max-w-[880] px-2 flex flex-col gap-4'>

                <StartTeam
                    idChannel="1"
                    idTeam="1"
                    imageUrl="/imagens/flamengo.jpg"
                />

                <TeamHeader 
                        
                />
            </div>
        </main>
    )
    
}
