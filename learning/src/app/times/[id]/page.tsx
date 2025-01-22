import { TeamHeader } from "@/components/header/team-header/team-header";
import { Metadata } from "next";

interface Props {
    params: { id: string }
}

export async function genarateMetadata ({ params }: Props): Promise<Metadata> {
    return {
        title:params.id,
        description: params.id
    }

  };

export default function PageTeamDetail({}: Props) {
    return (
        <main className='mt-8 flex justify-center'>
            <div className='w-full max-w-full min-[800px]:max-w-[880]'>
                <TeamHeader 
                        
                />
            </div>
        </main>
    )
    
}
