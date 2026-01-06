import EmailPasswordDemo from "@/setup-demo/EmailPasswordDemo";
import { createSupabaseServerClient } from "@/supabase/server-client";

const EmailPasswordPage = async () => {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // console.log({ user });
  return (
    <>
      <EmailPasswordDemo user={user} />
    </>
  );
};

export default EmailPasswordPage;
