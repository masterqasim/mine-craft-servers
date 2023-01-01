export const getCountries = async () => {
  const res = await fetch(
    "https://trial.mobiscroll.com/content/countries.json"
  );

  const countries = await res.json();
  return countries;
};
