/*eslint-disable*/

export default async function Home() {

  const response = await fetch(`http://localhost:8080/gabite`);
  const data = await response.json()
  console.log(data);

  return (
    <main className="">
      <input type="text" />
    </main>
  );
}
