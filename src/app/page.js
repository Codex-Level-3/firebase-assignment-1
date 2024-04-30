import FirebaseAuth from "./FirebaseAuth";

export default function Home() {
  return (
    <main className="mt-5 ml-5">
      <h1 className="text-2xl mb-5">Firebase Auth w/ Google!</h1>
      <FirebaseAuth />
    </main>
  );
}
