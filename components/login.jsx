import React, {useState} from "react";
import { useRouter } from "next/dist/client/router";
import FacebookLogin from 'react-facebook-login';
// import { useAuth } from "../../components/organisms/AuthProvider";
// import { AppErrorToast, AppToast } from "../../utils/toast";

const LoginPage = () => {
    //   const [_, login] = useLoginMutation();
    const [user, setUser] = useState();
    let history = useRouter();

    if (user) history.replace("/d");

    const componentClicked = (data) => {
        // console.log("data", data);
    }


    const responseFacebook = (response) => {
        setUser(response);
        localStorage.setItem("name", response.name);
        localStorage.setItem("picture", response.picture.data.url);
        localStorage.setItem("userid", response.id);
        localStorage.setItem("token", response.accessToken);
    }

    return (
        <div className="flex h-screen">
            <div className="flex-1 flex justify-center">
                <div className="w-2/3 self-center">
                    <h2 className="text-5xl mb-12">Login</h2>
                </div>
                <div className="flex flex-col justify-center">
                    <FacebookLogin
                        appId="856247031962107"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                        render={renderProps => (
                            <button onClick={renderProps.onClick}>This is my custom FB button</button>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

LoginPage.defaultProps = {};

export default LoginPage;
