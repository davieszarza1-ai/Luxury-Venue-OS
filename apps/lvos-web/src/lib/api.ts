const API_URL = "http://localhost:4000";


async function apiFetch(endpoint: string) {

  try {

    console.log(
      "TOKEN EXISTE:",
      !!process.env.LVOS_TOKEN
    );


    const response = await fetch(
      `${API_URL}${endpoint}`,
      {
        headers: {
          Authorization:
            `Bearer ${process.env.LVOS_TOKEN || ""}`,
        },
        cache: "no-store",
      }
    );


    if (!response.ok) {

      console.log(
        "API ERROR:",
        response.status
      );

      return null;

    }


    return await response.json();


  } catch (error) {

    console.log(
      "API CONNECTION ERROR",
      error
    );

    return null;

  }

}



export async function getAnalytics() {

  const overview =
    await apiFetch(
      "/analytics/overview"
    );


  const products =
    await apiFetch(
      "/analytics/products"
    );


  const guests =
    await apiFetch(
      "/analytics/guests"
    );


  return {

    overview:
      overview ||
      {
        transactions: 0,
        revenue: 0,
        averageTicket: 0
      },


    products:
      products ||
      [],


    guests:
      guests ||
      []

  };

}
