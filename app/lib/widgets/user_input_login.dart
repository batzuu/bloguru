import 'package:flutter/material.dart';

import '../provider/old_user.dart';

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

  var userData = OldUser(
    "",
    "",
  );

  bool _isKeepLogin = false;

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
                autovalidateMode: AutovalidateMode.onUserInteraction,
                validator: (val) => _isValidEmail(val.toString())
                    ? null
                    : "Entred email is not valid",
                onSaved: (newVal) {
                  userData = OldUser(newVal.toString(), userData.password);
                },
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Container(
              // height: 65,
              margin: const EdgeInsets.only(left: 15, right: 15),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  color: const Color.fromRGBO(80, 80, 80, 1)),
              child: TextFormField(
                obscureText: true,
                style: Theme.of(context).textTheme.bodyText1,
                decoration: InputDecoration(
                  // focusColor: Colors.white,
                  alignLabelWithHint: true,
                  prefixIcon: const Icon(
                    Icons.lock_outline,
                    color: Colors.white,
                  ),
                  // prefixIconColor: Colors.white,
                  hintText: "Password",
                  hintStyle: Theme.of(context).textTheme.bodyText1,
                  border: InputBorder.none,
                ),
                validator: (val) {
                  if (val != null) {
                    if (val.isEmpty || val == '') {
                      return "Please Enter a value";
                    }
                  } else {
                    return "Please enter a value";
                  }
                  return null;
                },
                onSaved: (newVal) {
                  userData = OldUser(userData.email, newVal.toString());
                },
              ),
            ),
            CheckboxListTile(
              activeColor: Theme.of(context).primaryColor,
              controlAffinity: ListTileControlAffinity.leading,
              title: Text(
                "Keep me signed in.",
                style: Theme.of(context).textTheme.bodyText1,
              ),
              value: _isKeepLogin,
              onChanged: (bool? value) {
                if (value != null) {
                  setState(() {
                    _isKeepLogin = value;
                  });
                }
              },
            ),
            const SizedBox(
              height: 20,
            ),
            Container(
              margin: const EdgeInsets.only(left: 15, right: 15),
              // padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(5),
                color: Theme.of(context).primaryColor,
              ),
              child: TextButton(
                  onPressed: () {},
                  child: Text(
                    "Login",
                    style: Theme.of(context).textTheme.headlineSmall,
                  )),
            )
          ],
        ),
      ),
    );
  }
}
