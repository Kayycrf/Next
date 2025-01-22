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

export default function PageCourseDetail({ params }: Props) {
    return (
        <main className="mt-8 flex justify-center">
            Conhecimento sobre o {params.id}
        </main>
    )
    
}
