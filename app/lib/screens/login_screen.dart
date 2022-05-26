import 'package:flutter/material.dart';

import '../widgets/user_input_login.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({Key? key}) : super(key: key);

  static String routeName = "/login-screen";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(13, 13, 13, 1),
      body: Column(
        children: [
          // const SizedBox(
          //   height: 180,
          // ),
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
        ],
      ),
    );
  }
}
