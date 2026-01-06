import GoogleLoginDemo from "@/setup-demo/GoogleLoginDemo";
import { createSupabaseServerClient } from "@/supabase/server-client";

const GoogleLoginPage = async () => {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // console.log({ user });
  return (
    <>
      <GoogleLoginDemo user={user} />
    </>
  );
};

export default GoogleLoginPage;
