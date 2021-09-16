import tiny from "tiny-json-http";

async function fetchFromDatoCms({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const { body } = await tiny.post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    data: {
      query,
      variables,
    },
  });
  return body.data;
}

export async function createSubscriptionProps(payload) {
  const data = await fetchFromDatoCms(payload);
  return {
    subscription: payload?.preview
      ? {
          ...payload,
          initialData: data,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }
      : {
          enabled: false,
          initialData: data,
        },
  };
}
