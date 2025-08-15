export const FormContainer = ({ title, buttonText, onSubmit, width, children, gap}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // evita recarregar a página
        onSubmit?.();
      }}
      className={"border border-gray-300 rounded-xl shadow-lg overflow-hidden bg-white w-full"  + (width ? ` max-w-${width}` : " max-w-lg") + " flex flex-col"}
    >
      {/* Cabeçalho vermelho */}
      <div className="bg-red-600 text-white text-2xl text-center py-3 font-semibold">
        {title}
      </div>

      {/* Conteúdo do formulário */}
      <div className={"p-8 flex flex-col" + (gap ? ` gap-${gap}` : " gap-4")}>
        {children}
      </div>

      {/* Botão de envio */}
      <div className="font-bold text-center p-8 rounded-md w-full flex justify-center">
        <button
          type="submit"
          className="bg-red-600 text-white px-16 py-3 rounded w-full hover:scale-101 transition-transform duration-200  active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};
