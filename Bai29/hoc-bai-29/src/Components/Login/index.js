function Login(){
    const isLogin=true;
    return (
        <> 
            {isLogin ?(
                <>
                    <div>
                        Thông tin người dùng,nút Logout
                    </div>
                </>
            ):(
                <>
                    <div>
                        Nút đăng nhập,Nút đăng ký
                    </div>
                </>
            )}
        </>
    )
}
export default Login;