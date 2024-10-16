import Link from "next/link";
import psiboard from "@/public/psiboard.png";

export default function Page() {
    return (
      <div className="flex min-h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-cover bg-center">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <img
            src={psiboard.src}
            alt="Logo"
            className="h-32 w-auto cursor-pointer"
          />
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[f3f3f3]">
            Faça login na sua conta
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
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
                  autoComplete="email"
                  placeholder="meu.email@example.com"
                  required
                  className="block w-full h-[40px] rounded-md border-0 py-1.5 text-[f3f3f3] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-[f3f3f3]"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="********"
                  required
                  className="block w-full  h-[40px] rounded-md border-0 py-1.5 text-[f3f3f3] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full h-[48px] justify-center flex-col items-center text-base rounded-md bg-[#132742] px-3 py-1.5 font-semibold leading-6 text-[#fff] shadow-sm"
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="flex items-start flex-col gap-2 mt-2">
            <p className="text-center text-sm text-[f3f3f3]">
              Não possui conta?
              <Link
                href="/register"
                className="font-semibold leading-6 text-[f3f3f3] ml-1"
              >
                Cadastre-se
              </Link>
            </p>
            <Link className="text-sm" href="/">
              Voltar para home
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
  