export async function POST(request) {
    try {
        const { item } = await request.json();

        if (!item || !item.name || !item.price) {
            return new Response(JSON.stringify({ error: 'Dados inválidos' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const origin = request.headers.get('origin') || 'http://localhost:3000';

        const body = {
            items: [
                {
                    title: item.name,
                    quantity: 1,
                    unit_price: item.price / 100,
                    currency_id: 'BRL',
                },
            ],
            back_urls: {
                success: 'http://localhost:3000/success',
                failure: 'http://localhost:3000/failure',
                pending: 'http://localhost:3000/pending',
            },

            // auto_return: 'approved',
        };

        // console.log('BODY ENVIADO AO MERCADO PAGO:', JSON.stringify(body, null, 2));

        const mpResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.MERCADO_PAGO_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!mpResponse.ok) {
            const error = await mpResponse.json();
            console.error('Erro do Mercado Pago:', error);
            return new Response(JSON.stringify({ error }), {
                status: mpResponse.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const preference = await mpResponse.json();

        return new Response(JSON.stringify({ init_point: preference.init_point }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Erro na API /checkout:', error);
        return new Response(JSON.stringify({ error: 'Erro ao criar preferência' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
