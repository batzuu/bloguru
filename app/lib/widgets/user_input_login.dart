import 'package:flutter/material.dart';

class UserInputLogin extends StatefulWidget {
  const UserInputLogin({Key? key}) : super(key: key);

  @override
  State<UserInputLogin> createState() => _UserInputLoginState();
}

class _UserInputLoginState extends State<UserInputLogin> {
  bool _isValidEmail(String email) {
    return RegExp(
            r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
        .hasMatch(email);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(15),
      child: Form(
        child: Column(
          children: [
            Container(
              // height: 65,
              margin: const EdgeInsets.only(left: 15, right: 15),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  color: const Color.fromRGBO(80, 80, 80, 1)),
              child: TextFormField(
                style: Theme.of(context).textTheme.bodyText1,
                keyboardType: TextInputType.emailAddress,
                decoration: InputDecoration(
                  // focusColor: Colors.white,
                  alignLabelWithHint: true,
                  prefixIcon: const Icon(
                    Icons.email_outlined,
                    color: Colors.white,
                  ),
                  // prefixIconColor: Colors.white,
                  hintText: "Email",
                  hintStyle: Theme.of(context).textTheme.bodyText1,
                  border: InputBorder.none,
                ),
                autovalidateMode: AutovalidateMode.always,
                validator: (val) => _isValidEmail(val.toString())
                    ? null
                    : "Entred email is not valid",
              ),
            ),
          ],
        ),
      ),
    );
  }
}
