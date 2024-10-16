import Link from "next/link";
import psiboard from "@/public/psiboard.png";

export default function Page() {
  return (
    <div className="flex min-h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className=" flex flex-col items-center">
        <img
          src={psiboard.src}
          alt="Logo"
          className="h-16 w-auto cursor-pointer"
        />
        <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[f3f3f3]">
          Comece hoje no PsiBoard
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium leading-6 text-[f3f3f3]"
            >
              Nome completo
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                data-testid="name"
                autoComplete="nome"
                placeholder="João da Silva"
                required
                className="block w-full h-[40px] rounded-md border-0 py-1.5 text-[f3f3f3] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-[f3f3f3]"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                data-testid="email"
                autoComplete="email"
                placeholder="meu.email@example.com"
                required
                className="block w-full h-[40px] rounded-md border-0 py-1.5 text-[f3f3f3] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="contact"
                className="block text-sm font-medium leading-6 text-[f3f3f3]"
              >
                Contato
              </label>
            </div>
            <div className="mt-2">
              <input
                id="contact"
                name="contact"
                type="text"
                data-testid="contact"
                autoComplete="current-contact"
                placeholder="(XX) XXXX-XXXX"
                required
                className="block w-full  h-[40px] rounded-md border-0 py-1.5 text-[f3f3f3] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-[f3f3f3]"
              >
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                data-testid="password"
                autoComplete="current-password"
                placeholder="********"
                required
                className="block w-full  h-[40px] rounded-md border-0 py-1.5 text-[f3f3f3] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label>Marque a opção do perfil</label>
            <select
              className="w-auto flex items-center justify-center"
              id="role"
              name="role"
              data-testid="role"
              required
            >
              <option value="PROFESSIONAL">Perfil profissional</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full h-[48px] justify-center flex-col items-center text-base rounded-md bg-[#132742] px-3 py-1.5 font-semibold leading-6 text-[#fff] shadow-sm"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <div className="flex items-start flex-col gap-2 mt-2">
          <p className="text-center text-sm text-[f3f3f3]">
            Já possui conta?
            <Link
              href="/register"
              className="font-semibold leading-6 text-[f3f3f3] ml-1"
            >
              Faça login
            </Link>
          </p>
          <Link className="text-sm" href="/">
            Voltar para home
          </Link>
        </div>
      </div>
    </div>
  );
}
