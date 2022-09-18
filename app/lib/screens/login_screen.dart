import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import '../widgets/user_input_login.dart';
import './home_screen.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({Key? key}) : super(key: key);

  static String routeName = "/login-screen";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(13, 13, 13, 1),
      body: SingleChildScrollView(
        physics: const BouncingScrollPhysics(),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.only(
                top: 180,
              ),
              child: RichText(
                text: TextSpan(
                  text: "Blo",
                  style: Theme.of(context).textTheme.headlineLarge,
                  children: const [
                    TextSpan(
                      text: "guru",
                      style: TextStyle(
                        color: Color.fromRGBO(181, 111, 241, 1),
                        fontFamily: "Poppins",
                        fontSize: 48,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(
              height: 30,
            ),
            const UserInputLogin(),
            const SizedBox(
              height: 10,
            ),
            RichText(
              text: TextSpan(
                text: "Forget Password? ",
                style: Theme.of(context).textTheme.bodyText1,
                children: [
                  TextSpan(
                    recognizer: TapGestureRecognizer()
                      ..onTap = () {
                        debugPrint("forget password");
                      },
                    text: "Recover here",
                    style: const TextStyle(
                      color: Color.fromRGBO(181, 111, 241, 1),
                      fontFamily: "Poppins",
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(
              height: 80,
            ),
            const Padding(
              padding: EdgeInsets.only(left: 20),
              child: Divider(
                endIndent: 30,
                color: Colors.white,
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  TextButton(
                    onPressed: () {
                      Navigator.pushReplacementNamed(
                          context, HomeScreen.routeName);
                    },
                    child: const Text(
                      "Skip for now",
                      style: TextStyle(
                        color: Color.fromRGBO(181, 111, 241, 1),
                        fontFamily: "Poppins",
                        fontSize: 16,
                      ),
                    ),
                  ),
                  RichText(
                    text: TextSpan(
                      text: "New User? ",
                      style: Theme.of(context).textTheme.bodyText1,
                      children: [
                        TextSpan(
                          recognizer: TapGestureRecognizer()..onTap = () {},
                          text: "SignUp",
                          style: const TextStyle(
                            color: Color.fromRGBO(181, 111, 241, 1),
                            fontFamily: "Poppins",
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
