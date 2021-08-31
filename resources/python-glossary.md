# Python Glossary

## Glossary

**Binary Distribution**

A specific kind of [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution) that contains compiled extensions.Built Distribution

A [Distribution](https://packaging.python.org/glossary/#term-Distribution-Package) format containing files and metadata that only need to be moved to the correct location on the target system, to be installed. [Wheel](https://packaging.python.org/glossary/#term-Wheel) is such a format, whereas distutil’s [Source Distribution](https://packaging.python.org/glossary/#term-Source-Distribution-or-sdist) is not, in that it requires a build step before it can be installed. This format does not imply that Python files have to be precompiled \([Wheel](https://packaging.python.org/glossary/#term-Wheel) intentionally does not include compiled Python files\).Distribution Package

A versioned archive file that contains Python [packages](https://packaging.python.org/glossary/#term-Import-Package), [modules](https://packaging.python.org/glossary/#term-Module), and other resource files that are used to distribute a [Release](https://packaging.python.org/glossary/#term-Release). The archive file is what an end-user will download from the internet and install.

A distribution package is more commonly referred to with the single words “package” or “distribution”, but this guide may use the expanded term when more clarity is needed to prevent confusion with an [Import Package](https://packaging.python.org/glossary/#term-Import-Package) \(which is also commonly called a “package”\) or another kind of distribution \(e.g. a Linux distribution or the Python language distribution\), which are often referred to with the single term “distribution”.Egg

A [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution) format introduced by [setuptools](https://packaging.python.org/key_projects/#setuptools), which is being replaced by [Wheel](https://packaging.python.org/glossary/#term-Wheel). For details, see \` [The Internal Structure of Python Eggs](https://setuptools.readthedocs.io/en/latest/deprecated/python_eggs.html) and [Python Eggs](http://peak.telecommunity.com/DevCenter/PythonEggs)Extension Module

A [Module](https://packaging.python.org/glossary/#term-Module) written in the low-level language of the Python implementation: C/C++ for Python, Java for Jython. Typically contained in a single dynamically loadable pre-compiled file, e.g. a shared object \(.so\) file for Python extensions on Unix, a DLL \(given the .pyd extension\) for Python extensions on Windows, or a Java class file for Jython extensions.Known Good Set \(KGS\)

A set of distributions at specified versions which are compatible with each other. Typically a test suite will be run which passes all tests before a specific set of packages is declared a known good set. This term is commonly used by frameworks and toolkits which are comprised of multiple individual distributions.Import Package

A **Python module** which can contain other modules or recursively, other packages.

**An import package** is more commonly referred to with the single word “package”, but this guide will use the expanded term when more clarity is needed to prevent confusion with a [Distribution Package](https://packaging.python.org/glossary/#term-Distribution-Package) which is also commonly called a “package”.Module

The basic unit of code reusability in Python, existing in one of two types: [Pure Module](https://packaging.python.org/glossary/#term-Pure-Module), or [Extension Module](https://packaging.python.org/glossary/#term-Extension-Module).Package Index

A repository of distributions with a web interface to automate [package](https://packaging.python.org/glossary/#term-Distribution-Package) discovery and consumption.Per Project Index

A private or other non-canonical [Package Index](https://packaging.python.org/glossary/#term-Package-Index) indicated by a specific [Project](https://packaging.python.org/glossary/#term-Project) as the index preferred or required to resolve dependencies of that project.Project

A library, framework, script, plugin, application, or collection of data or other resources, or some combination thereof that is intended to be packaged into a [Distribution](https://packaging.python.org/glossary/#term-Distribution-Package).

Since most projects create [Distributions](https://packaging.python.org/glossary/#term-Distribution-Package) using either [**PEP 518**](https://www.python.org/dev/peps/pep-0518) `build-system`, [distutils](https://packaging.python.org/key_projects/#distutils) or [setuptools](https://packaging.python.org/key_projects/#setuptools), another practical way to define projects currently is something that contains a [pyproject.toml](https://packaging.python.org/glossary/#term-pyproject.toml), [setup.py](https://packaging.python.org/glossary/#term-setup.py), or [setup.cfg](https://packaging.python.org/glossary/#term-setup.cfg) file at the root of the project source directory.

Python projects must have unique names, which are registered on [PyPI](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI). Each project will then contain one or more [Releases](https://packaging.python.org/glossary/#term-Release), and each release may comprise one or more [distributions](https://packaging.python.org/glossary/#term-Distribution-Package).

Note that there is a strong convention to name a project after the name of the package that is imported to run that project. However, this doesn’t have to hold true. It’s possible to install a distribution from the project ‘foo’ and have it provide a package importable only as ‘bar’.Pure Module

A [Module](https://packaging.python.org/glossary/#term-Module) written in Python and contained in a single `.py` file \(and possibly associated `.pyc` and/or `.pyo` files\).Python Packaging Authority \(PyPA\)

PyPA is a working group that maintains many of the relevant projects in Python packaging. They maintain a site at [https://www.pypa.io](https://www.pypa.io/), host projects on [GitHub](https://github.com/pypa) and [Bitbucket](https://bitbucket.org/pypa), and discuss issues on the [distutils-sig mailing list](https://mail.python.org/mailman3/lists/distutils-sig.python.org/) and [the Python Discourse forum](https://discuss.python.org/c/packaging).Python Package Index \(PyPI\)

[PyPI](https://pypi.org/) is the default [Package Index](https://packaging.python.org/glossary/#term-Package-Index) for the Python community. It is open to all Python developers to consume and distribute their distributions.pypi.org

[pypi.org](https://pypi.org/) is the domain name for the [Python Package Index \(PyPI\)](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI). It replaced the legacy index domain name, `pypi.python.org`, in 2017. It is powered by [Warehouse](https://packaging.python.org/key_projects/#warehouse).pyproject.toml

The tool-agnostic [Project](https://packaging.python.org/glossary/#term-Project) specification file. Defined in [**PEP 518**](https://www.python.org/dev/peps/pep-0518).Release

A snapshot of a [Project](https://packaging.python.org/glossary/#term-Project) at a particular point in time, denoted by a version identifier.

Making a release may entail the publishing of multiple [Distributions](https://packaging.python.org/glossary/#term-Distribution-Package). For example, if version 1.0 of a project was released, it could be available in both a source distribution format and a Windows installer distribution format.Requirement

A specification for a [package](https://packaging.python.org/glossary/#term-Distribution-Package) to be installed. [pip](https://packaging.python.org/key_projects/#pip), the [PYPA](https://packaging.python.org/glossary/#term-Python-Packaging-Authority-PyPA) recommended installer, allows various forms of specification that can all be considered a “requirement”. For more information, see the [pip install](https://pip.pypa.io/en/latest/cli/pip_install/#pip-install) reference.Requirement Specifier

A format used by [pip](https://packaging.python.org/key_projects/#pip) to install packages from a [Package Index](https://packaging.python.org/glossary/#term-Package-Index). For an EBNF diagram of the format, see the [pkg\_resources.Requirement](https://setuptools.readthedocs.io/en/latest/pkg_resources.html#requirement-objects) entry in the [setuptools](https://packaging.python.org/key_projects/#setuptools) docs. For example, “foo&gt;=1.3” is a requirement specifier, where “foo” is the project name, and the “&gt;=1.3” portion is the [Version Specifier](https://packaging.python.org/glossary/#term-Version-Specifier)Requirements File

A file containing a list of [Requirements](https://packaging.python.org/glossary/#term-Requirement) that can be installed using [pip](https://packaging.python.org/key_projects/#pip). For more information, see the [pip](https://packaging.python.org/key_projects/#pip) docs on [Requirements Files](https://pip.pypa.io/en/latest/user_guide/#requirements-files).setup.pysetup.cfg

The project specification files for [distutils](https://packaging.python.org/key_projects/#distutils) and [setuptools](https://packaging.python.org/key_projects/#setuptools). See also [pyproject.toml](https://packaging.python.org/glossary/#term-pyproject.toml).Source Archive

An archive containing the raw source code for a [Release](https://packaging.python.org/glossary/#term-Release), prior to creation of a [Source Distribution](https://packaging.python.org/glossary/#term-Source-Distribution-or-sdist) or [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution).Source Distribution \(or “sdist”\)

A [distribution](https://packaging.python.org/glossary/#term-Distribution-Package) format \(usually generated using `python setup.py sdist`\) that provides metadata and the essential source files needed for installing by a tool like [pip](https://packaging.python.org/key_projects/#pip), or for generating a [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution).System Package

A package provided in a format native to the operating system, e.g. an rpm or dpkg file.Version Specifier

The version component of a [Requirement Specifier](https://packaging.python.org/glossary/#term-Requirement-Specifier). For example, the “&gt;=1.3” portion of “foo&gt;=1.3”. [**PEP 440**](https://www.python.org/dev/peps/pep-0440) contains a [**full specification**](https://www.python.org/dev/peps/pep-0440#version-specifiers) of the specifiers that Python packaging currently supports. Support for PEP440 was implemented in [setuptools](https://packaging.python.org/key_projects/#setuptools) v8.0 and [pip](https://packaging.python.org/key_projects/#pip) v6.0.Virtual Environment[¶](https://packaging.python.org/glossary/#term-Virtual-Environment)

An isolated Python environment that allows packages to be installed for use by a particular application, rather than being installed system wide. For more information, see the section on [Creating Virtual Environments](https://packaging.python.org/tutorials/installing-packages/#creating-and-using-virtual-environments).Wheel

A [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution) format introduced by [**PEP 427**](https://www.python.org/dev/peps/pep-0427), which is intended to replace the [Egg](https://packaging.python.org/glossary/#term-Egg) format. Wheel is currently supported by [pip](https://packaging.python.org/key_projects/#pip).Working Set

A collection of [distributions](https://packaging.python.org/glossary/#term-Distribution-Package) available for importing. These are the distributions that are on the [`sys.path`](https://docs.python.org/2/library/sys.html#sys.path) variable. At most, one [Distribution](https://packaging.python.org/glossary/#term-Distribution-Package) for a project is possible in a working set.

