# Installing stand alone command line tools

Many packages provide command line applications. Examples of such packages are [mypy](https://github.com/python/mypy), [flake8](https://github.com/PyCQA/flake8), [black](https://github.com/psf/black), and [Pipenv](https://packaging.python.org/key_projects/#pipenv).

Usually you want to be able to access these applications from anywhere on your system, but installing packages and their dependencies to the same global environment can cause version conflicts and break dependencies the operating system has on Python packages.

[pipx](https://packaging.python.org/key_projects/#pipx) solves this by creating a virtual environment for each package, while also ensuring that its applications are accessible through a directory that is on your `$PATH`. This allows each package to be upgraded or uninstalled without causing conflicts with other packages, and allows you to safely run the applications from anywhere.

Note

pipx only works with Python 3.6+.

pipx is installed with pip:Unix/macOS

```text
python3 -m pip install --user pipx
python3 -m pipx ensurepath
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

Note

`ensurepath` ensures that the application directory is on your `$PATH`. You may need to restart your terminal for this update to take effect.

Now you can install packages with `pipx install` and run the package’s applications\(s\) from anywhere.

```text
$ pipx install PACKAGE
$ PACKAGE_APPLICATION [ARGS]
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

For example:

```text
$ pipx install cowsay
  installed package cowsay 2.0, Python 3.6.2+
  These binaries are now globally available
    - cowsay
done! ✨ 🌟 ✨
$ cowsay moo
  ___
< moo >
  ===
        \
         \
           ^__^
           (oo)\_______
           (__)\       )\/       ||----w |
               ||     ||
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

To see a list of packages installed with pipx and which applications are available, use `pipx list`:

```text
$ pipx list
venvs are in /Users/user/.local/pipx/venvs
symlinks to binaries are in /Users/user/.local/bin
   package black 18.9b0, Python 3.6.2+
    - black
    - blackd
   package cowsay 2.0, Python 3.6.2+
    - cowsay
   package mypy 0.660, Python 3.6.2+
    - dmypy
    - mypy
    - stubgen
   package nox 2018.10.17, Python 3.6.2+
    - nox
    - tox-to-nox
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

To upgrade or uninstall a package:

```text
pipx upgrade PACKAGE
pipx uninstall PACKAGE
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

pipx can be upgraded or uninstalled with pip:Unix/macOS

```text
python3 -m pip install -U pipx
python3 -m pip uninstall pipx
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

pipx also allows you to install and run the latest version of an application in a temporary, ephemeral environment. For example:

```text
pipx run cowsay moooo
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

To see the full list of commands pipx offers, run:

```text
pipx --help
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

You can learn more about pipx at [https://pypa.github.io/pipx/](https://pypa.github.io/pipx/).

