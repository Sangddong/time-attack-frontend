import Page from "@/components/Page";

async function getProduct(productId: number) {
  const response = await fetch(
    `https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  const data=await response.json();
  return data;
}

async function productPage({params:{id}}: {params:{id: number}}){
    const product = await getProduct(id);

    return (
        <Page>
            <h6>{product.name}</h6>
        </Page>
    )
}
