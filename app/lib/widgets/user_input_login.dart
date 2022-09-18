import 'package:flutter/material.dart';

class UserInputLogin extends StatefulWidget {
  const UserInputLogin({Key? key}) : super(key: key);

  @override
  State<UserInputLogin> createState() => _UserInputLoginState();
}

class _UserInputLoginState extends State<UserInputLogin> {
  bool autoLogin = false;

  UnderlineInputBorder buildInputBorderRadius() {
    return UnderlineInputBorder(
      borderSide: const BorderSide(color: Color.fromRGBO(80, 80, 80, 1)),
      borderRadius: BorderRadius.circular(8),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      child: Column(
        children: [
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 20),
            padding: const EdgeInsets.all(10),
            child: TextFormField(
              style: Theme.of(context).textTheme.bodyText1,
              keyboardType: TextInputType.emailAddress,
              decoration: InputDecoration(
                filled: true,
                fillColor: const Color.fromRGBO(80, 80, 80, 1),
                focusedErrorBorder: buildInputBorderRadius(),
                enabledBorder: buildInputBorderRadius(),
                focusedBorder: buildInputBorderRadius(),
                errorBorder: buildInputBorderRadius(),
                prefixIcon: const Icon(
                  Icons.email_outlined,
                  color: Colors.white,
                ),
                hintText: "Email",
                hintStyle: Theme.of(context).textTheme.bodyText1,
                border: InputBorder.none,
              ),
              autovalidateMode: AutovalidateMode.onUserInteraction,
              validator: (val) => _isValidEmail(val.toString())
                  ? null
                  : "Entred email is not valid",
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 20),
            padding: const EdgeInsets.all(10),
            child: TextFormField(
              obscureText: true,
              style: Theme.of(context).textTheme.bodyText1,
              decoration: InputDecoration(
                filled: true,
                fillColor: const Color.fromRGBO(80, 80, 80, 1),
                focusedErrorBorder: buildInputBorderRadius(),
                enabledBorder: buildInputBorderRadius(),
                focusedBorder: buildInputBorderRadius(),
                errorBorder: buildInputBorderRadius(),
                prefixIcon: const Icon(
                  Icons.lock_outline_rounded,
                  color: Colors.white,
                ),
                hintText: "Password",
                hintStyle: Theme.of(context).textTheme.bodyText1,
                border: InputBorder.none,
              ),
              // autovalidateMode: AutovalidateMode.always,
              // validator: (val) => _isValidEmail(val.toString())
              //     ? null
              //     : "Entred email is not valid",
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 20),
            child: Row(
              children: [
                Theme(
                  data: ThemeData(unselectedWidgetColor: Colors.white),
                  child: Checkbox(
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(5)),
                    activeColor: Theme.of(context).primaryColor,
                    checkColor: Colors.black,
                    value: autoLogin,
                    onChanged: (val) {
                      setState(() {
                        autoLogin = val ?? false;
                      });
                    },
                  ),
                ),
                Text(
                  "Keep me signed in",
                  style: Theme.of(context).textTheme.bodyText1,
                )
              ],
            ),
          ),
          const SizedBox(
            height: 50,
          ),
          ElevatedButton(
            style: ButtonStyle(
              fixedSize: MaterialStateProperty.all(const Size(300, 50)),
              shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(10))),
              backgroundColor: MaterialStateProperty.all<Color>(
                  Theme.of(context).primaryColor),
            ),
            onPressed: () {},
            child: Text(
              "Login",
              style: Theme.of(context).textTheme.headline1,
            ),
          )
        ],
      ),
      // ),
    );
  }

  bool _isValidEmail(String email) {
    return RegExp(
            r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
        .hasMatch(email);
  }
}
