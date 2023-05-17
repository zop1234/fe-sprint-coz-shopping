export default function Toast({toastMessage}) {
  return (
    <section className="absolute bottom-20 left-10 w-72 h-10 border-4 border-black z-50 text-center bg-white">
      {toastMessage}
    </section>
  );
}