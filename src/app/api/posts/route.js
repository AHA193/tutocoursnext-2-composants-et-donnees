export async function GET(request){
    return new Response(
        JSON.stringify([{
            userId: 999,
            id: 100,
            title: "Données depuis /api/posts",
            body: "Hello World"
        }]),
        {
            status: 200,
            header: {
                "Content-Type": "application/json"
            }
        }

    )
}