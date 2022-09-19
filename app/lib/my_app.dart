import 'package:flutter/material.dart';

import './screens/login_screen.dart';
import './screens/home_screen.dart';

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
            headline1: TextStyle(
              color: Colors.white,
              fontFamily: "Poppins",
              fontSize: 24,
              fontWeight: FontWeight.bold,
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
        HomeScreen.routeName: (context) => const HomeScreen(), 
      },
    );
  }
}