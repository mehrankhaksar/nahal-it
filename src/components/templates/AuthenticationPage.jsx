import { Separator } from "../ui/separator";

import AuthenticationForm from "../modules/AuthenticationForm";

const AuthenticationPage = () => {
  return (
    <section className="mt-10 md:mt-40">
      <div className="container mx-auto">
        <div className="flex gap-10 bg-primary p-10 rounded-xl">
          <AuthenticationForm signIn />
          <Separator
            className="w-[2.5px] h-[300px] self-center"
            orientation="vertical"
          />
          <AuthenticationForm />
        </div>
      </div>
    </section>
  );
};

export default AuthenticationPage;
