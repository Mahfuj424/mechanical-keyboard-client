import SecondNavbar from "@/components/ui/shared/SecondNavbar";

const Success = () => {
  return (
    <div className="h-screen">
      <SecondNavbar prevNav="home" currNav="Success" />
      <h1 className="pt-52 text-center text-3xl text-green-500">payment successful</h1>
    </div>
  );
};

export default Success;
