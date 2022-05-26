import 'package:flutter/material.dart';

import './screens/login_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bloguru',
      theme: ThemeData(
        textTheme: const TextTheme(
            bodyText1: TextStyle(
              color: Colors.white,
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: FontWeight.w300,
            ),
            headlineLarge: TextStyle(
              color: Colors.white,
              fontFamily: "Poppins",
              fontSize: 48,
              fontWeight: FontWeight.bold,
            )),
        primaryColor: const Color.fromRGBO(181, 111, 241, 1),
      ),
      initialRoute: LoginScreen.routeName,
      routes: {
        LoginScreen.routeName: (context) => const LoginScreen(),
      },
    );
  }
}
