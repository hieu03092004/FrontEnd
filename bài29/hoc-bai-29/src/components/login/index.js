function Login() {
  const isLogin = false;
  return (
    <>
      {isLogin === true ? (
        <>
          <div>Thông tin người dùng,nút logout</div>
        </>
      ) : (
        <>
          <div>Nút đăng nhập,Nút đăng ký</div>
        </>
      )}
    </>
  );
}

export default Login;
