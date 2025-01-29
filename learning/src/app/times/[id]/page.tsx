import { TeamHeader } from "@/components/header/team-header/team-header";
import { Class } from "@/components/team-content/components/Class";
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
            <div className='w-full max-w-full min-[800px]:max-w-[880] px-2 lg:px-0 flex flex-col md:flex-row md:flex-row-reverse gap-4'>
                <div className="flex-1">
                    <StartTeam
                        idChannel="1"
                        idTeam="1"
                        imageUrl="/imagens/flamengo.jpg"
                        title='🔴⚫ Flamengo'
                    />
                </div>
                
                <div className="flex-[2]">
                    <TeamHeader />
                    <Class
                        playerUrl="https://youtu.be/mMIeK0gC6qk?si=WeY-S_XE0KJuvYjn"
                        title='Bastidores de Flamengo 1 x 0 Atlético-MG - Copa do Brasil'
                    />
                </div>
            </div>
            
            
        </main>
    )
    
}
