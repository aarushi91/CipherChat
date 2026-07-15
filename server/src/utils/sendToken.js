const sendToken = (user, token, statusCode, res) => {

    const options = {

        httpOnly: true,

        secure: false,

        sameSite: "lax",

        maxAge: 7 * 24 * 60 * 60 * 1000

    };

    res
        .status(statusCode)
        .cookie("token", token, options)
        .json({

            success: true,

            message: "Login Successful",

            user

        });

};

export default sendToken;