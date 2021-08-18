 


- [Home](/index.php)
- [Python Exercises](/python-exercises/)
- ▼Machine Learning Exercises
- [Machine Learning Home](/machine-learning/scikit-learn/iris/index.php)
- [..More to come..]()

# Python: Machine learning - Scikit-learn Exercises, Practice, Solution

Last update on June 15 2021 10:14:02 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Python Machine learning Iris flower data set \[38 exercises with solution\]

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

Scikit-learn is a free software machine learning library for the Python programming language. It features various classification, regression and clustering algorithms including support vector machines, random forests, gradient boosting, k-means and DBSCAN, and is designed to interoperate with the Python numerical and scientific libraries NumPy and SciPy.

The best way we learn anything is by practice and exercise questions. We have started this section for those (beginner to intermediate) who are familiar with Python, Scikit-learn. Hope, these exercises help you to improve your Machine learning skills using Scikit-learn. Currently, data set are available, we are working hard to add more exercises .... Happy Coding!

**Iris flower data set**

From Wikipedia - The Iris flower data set or Fisher's Iris data set is a multivariate data set introduced by the British statistician and biologist Ronald Fisher in his 1936 paper The use of multiple measurements in taxonomic problems as an example of linear discriminant analysis. It is sometimes called Anderson's Iris data set because Edgar Anderson collected the data to quantify the morphologic variation of Iris flowers of three related species. Two of the three species were collected in the Gaspé Peninsula "all from the same pasture, and picked on the same day and measured at the same time by the same person with the same apparatus"

![iris flower data set](https://www.w3resource.com/w3r_images/iris_flower_dataset.png)

The data set consists of 50 samples from each of three species of Iris (Iris setosa, Iris virginica and Iris versicolor). Four features were measured from each sample: the length and the width of the sepals and petals, in centimeters. Based on the combination of these four features, Fisher developed a linear discriminant model to distinguish the species from each other.

## Basic - Iris flower data set \[8 exercises with solution\]

**1.** Write a Python program to load the iris data from a given csv file into a dataframe and print the shape of the data, type of the data and first 3 rows. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-basic-exercise-1.php)

**2.** Write a Python program using Scikit-learn to print the keys, number of rows-columns, feature names and the description of the Iris data. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-basic-exercise-2.php)

**3.** Write a Python program to get the number of observations, missing values and nan values. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-basic-exercise-3.php)

**4.** Write a Python program to create a 2-D array with ones on the diagonal and zeros elsewhere. Now convert the NumPy array to a SciPy sparse matrix in CSR format. [Go to the editor](#EDITOR)  
From wikipedia :  
In numerical analysis and scientific computing, a sparse matrix or sparse array is a matrix in which most of the elements are zero. By contrast, if most of the elements are nonzero, then the matrix is considered dense. The number of zero-valued elements divided by the total number of elements (e.g., m x n for an m x n matrix) is called the sparsity of the matrix (which is equal to 1 minus the density of the matrix). Using those definitions, a matrix will be sparse when its sparsity is greater than 0.5.

[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-basic-exercise-4.php)

**5.** Write a Python program to view basic statistical details like percentile, mean, std etc. of iris data. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-basic-exercise-5.php)

**6.** Write a Python program to get observations of each species (setosa, versicolor, virginica) from iris data. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-basic-exercise-6.php)

**7.** Write a Python program to drop Id column from a given Dataframe and print the modified part. Call iris.csv to create the Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-basic-exercise-7.php)

**8.** Write a Python program to access first four cells from a given Dataframe using the index and column labels. Call iris.csv to create the Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-basic-exercise-8.php)

## Visualization - Iris flower data set \[19 exercises with solution\]

**1.** Write a Python program to create a plot to get a general Statistics of Iris data. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-1.php)

**2.** Write a Python program to create a Bar plot to get the frequency of the three species of the Iris data. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-2.php)

**3.** Write a Python program to create a Pie plot to get the frequency of the three species of the Iris data. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-3.php)

**4.** Write a Python program to create a graph to find relationship between the sepal length and width. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-4.php)

**5.** Write a Python program to create a graph to find relationship between the petal length and width. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-5.php)

**6.** Write a Python program to create a graph to see how the length and width of SepalLength, SepalWidth, PetalLength, PetalWidth are distributed. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-6.php)

**7.** Write a Python program to create a joinplot to describe individual distributions on the same plot between Sepal length and Sepal width. [Go to the editor](#EDITOR)  
Note: joinplot - Draw a plot of two variables with bivariate and univariate graphs.  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-7.php)

**8.** Write a Python program to create a joinplot using "hexbin" to describe individual distributions on the same plot between Sepal length and Sepal width. [Go to the editor](#EDITOR)  
Note:  
The bivariate analogue of a histogram is known as a "hexbin" plot, because it shows the counts of observations that fall within hexagonal bins. This plot works best with relatively large datasets. It's available through the matplotlib plt.hexbin function and as a style in jointplot(). It looks best with a white background.  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-8.php)

**9.** Write a Python program to create a joinplot using "kde" to describe individual distributions on the same plot between Sepal length and Sepal width. [Go to the editor](#EDITOR)  
Note:  
The kernel density estimation (kde) procedure visualize a bivariate distribution. In seaborn, this kind of plot is shown with a contour plot and is available as a style in jointplot().  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-9.php)

**10.** Write a Python program to create a joinplot and add regression and kernel density fits using "reg" to describe individual distributions on the same plot between Sepal length and Sepal width. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-10.php)

**11.** Write a Python program to draw a scatterplot, then add a joint density estimate to describe individual distributions on the same plot between Sepal length and Sepal width. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-11.php)

**12.** Write a Python program to create a joinplot using "kde" to describe individual distributions on the same plot between Sepal length and Sepal width and use '+' sign as marker. [Go to the editor](#EDITOR)  
Note:  
The kernel density estimation (kde) procedure visualize a bivariate distribution. In seaborn, this kind of plot is shown with a contour plot and is available as a style in jointplot().  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-12.php)

**13.** Write a Python program to create a pairplot of the iris data set and check which flower species seems to be the most separable. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-13.php)

**14.** Write a Python program using seaborn to Create a kde (Kernel Density Estimate ) plot of sepal_length versus sepal width for setosa species of flower. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-14.php)

**15.** Write a Python program using seaborn to Create a kde (Kernel Density Estimate ) plot of petal_length versus petal width for setosa species of flower. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-15.php)

**16.** Write a Python program using seaborne to create a kde (Kernel Density Estimate) plot of two shaded bivariate densities of Sepal Width and Sepal Length. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-16.php)

**17.** Write a Python program to find the correlation between variables of iris data. Also create a hitmap using Seaborn to present their relations. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-17.php)

**18.** Write a Python program to create a box plot (or box-and-whisker plot) which shows the distribution of quantitative data in a way that facilitates comparisons between variables or across levels of a categorical variable of iris dataset. Use seaborn. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-18.php)

**19.** From Wikipedia -  
Principal component analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables (entities each of which takes on various numerical values) into a set of values of linearly uncorrelated variables called principal components. This transformation is defined in such a way that the first principal component has the largest possible variance (that is, accounts for as much of the variability in the data as possible), and each succeeding component in turn has the highest variance possible under the constraint that it is orthogonal to the preceding components. The resulting vectors (each being a linear combination of the variables and containing n observations) are an uncorrelated orthogonal basis set. PCA is sensitive to the relative scaling of the original variables. [Go to the editor](#EDITOR)  
Write a Python program to create a Principal component analysis (PCA) of iris dataset.  
[Click me to see the sample solution](python-machine-learning-scikit-learn-iris-visualization-exercise-19.php)

## K-Nearest Neighbors Algorithm in Iris flower data set \[8 exercises with solution\]

From Wikipedia,

In pattern recognition, the k-nearest neighbors algorithm (k-NN) is a non-parametric method used for classification and regression.\[1\] In both cases, the input consists of the k closest training examples in the feature space. The output depends on whether k-NN is used for classification or regression:

- itemscope itemtype="http://schema.org/WebPageElement/Heading"&gt; In k-NN classification, the output is a class membership. An object is classified by a plurality vote of its neighbors, with the object being assigned to the class most common among its k nearest neighbors (k is a positive integer, typically small). If k = 1, then the object is simply assigned to the class of that single nearest neighbor.
- itemscope itemtype="http://schema.org/WebPageElement/Heading"&gt; In k-NN regression, the output is the property value for the object. This value is the average of the values of k nearest neighbors.

![K-Nearest Neighbors Algorithm in Iris flower data set](https://www.w3resource.com/w3r_images/k-nearest-neighbors-algorithm.svg)

Example of k-NN classification. The test sample (green dot) should be classified either to blue squares or to red triangles. If k = 3 (solid line circle) it is assigned to the red triangles because there are 2 triangles and only 1 square inside the inner circle. If k = 5 (dashed line circle) it is assigned to the blue squares (3 squares vs. 2 triangles inside the outer circle).

**1.** Write a Python program to split the iris dataset into its attributes (X) and labels (y). The X variable contains the first four columns (i.e. attributes) and y contains the labels of the dataset. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-k-nearest-neighbors-algorithm-exercise-1.php)

**2.** Write a Python program using Scikit-learn to split the iris dataset into 70% train data and 30% test data. Out of total 150 records, the training set will contain 120 records and the test set contains 30 of those records. Print both datasets. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-k-nearest-neighbors-algorithm-exercise-2.php)

**3.** Write a Python program using Scikit-learn to convert Species columns in a numerical column of the iris dataframe. To encode this data map convert each value to a number. e.g. Iris-setosa:0, Iris-versicolor:1, and Iris-virginica:2. Now print the iris dataset into 80% train data and 20% test data. Out of total 150 records, the training set will contain 120 records and the test set contains 30 of those records. Print both datasets. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-k-nearest-neighbors-algorithm-exercise-3.php)

**4.** Write a Python program using Scikit-learn to split the iris dataset into 70% train data and 30% test data. Out of total 150 records, the training set will contain 105 records and the test set contains 45 of those records. Predict the response for test dataset (SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm) using the K Nearest Neighbor Algorithm. Use 5 as number of neighbors. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-k-nearest-neighbors-algorithm-exercise-4.php)

**5.** Write a Python program using Scikit-learn to split the iris dataset into 80% train data and 20% test data. Out of total 150 records, the training set will contain 120 records and the test set contains 30 of those records. Train or fit the data into the model and calculate the accuracy of the model using the K Nearest Neighbor Algorithm. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-k-nearest-neighbors-algorithm-exercise-5.php)

**6.** Write a Python program using Scikit-learn to split the iris dataset into 80% train data and 20% test data. Out of total 150 records, the training set will contain 120 records and the test set contains 30 of those records. Train or fit the data into the model and using the K Nearest Neighbor Algorithm calculate the performance for different values of k. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-k-nearest-neighbors-algorithm-exercise-6.php)

**7.** Write a Python program using Scikit-learn to split the iris dataset into 80% train data and 20% test data. Out of total 150 records, the training set will contain 120 records and the test set contains 30 of those records. Train or fit the data into the model and using the K Nearest Neighbor Algorithm and create a plot to present the performance for different values of k. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-k-nearest-neighbors-algorithm-exercise-7.php)

**8.** Write a Python program using Scikit-learn to split the iris dataset into 80% train data and 20% test data. Out of total 150 records, the training set will contain 120 records and the test set contains 30 of those records. Train or fit the data into the model and using the K Nearest Neighbor Algorithm and create a plot of k values vs accuracy. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-k-nearest-neighbors-algorithm-exercise-8.php)

## Logistic Regression in Sci-Kit Learn \[3 exercises with solution\]

**1.** Write a Python program to view some basic statistical details like percentile, mean, std etc. of the species of 'Iris-setosa', 'Iris-versicolor' and 'Iris-virginica'. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-logistic-regression-exercise-1.php)

**2.** Write a Python program to create a scatter plot using sepal length and petal_width to separate the Species classes. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](python-machine-learning-scikit-learn-logistic-regression-exercise-2.php)

**3.** In statistical modeling, regression analysis is a set of statistical processes for estimating the relationships among variables. It includes many techniques for modeling and analyzing several variables, when the focus is on the relationship between a dependent variable and one or more independent variables (or 'predictors'). [Go to the editor](#EDITOR)  
Write a Python program to get the accuracy of the Logistic Regression.  
[Click me to see the sample solution](python-machine-learning-scikit-learn-logistic-regression-exercise-3.php)

**Python Code Editor:**

\[ Want to contribute to Python exercises? Send your code (attached with a .zip file) to us at w3resource\[at\]yahoo\[dot\]com. Please avoid copyrighted materials.\]

---

<span class="underline"></span>

- **New Content published on w3resource:**
- [Scala Programming Exercises, Practice, Solution](https://www.w3resource.com/scala-exercises/index.php)
- [Python Itertools exercises](https://www.w3resource.com/python-exercises/itertools/index.php)
- [Python Numpy exercises](https://www.w3resource.com/python-exercises/numpy/index.php)
- [Python GeoPy Package exercises](https://www.w3resource.com/python-exercises/geopy/index.php)
- [Python Pandas exercises](https://www.w3resource.com/python-exercises/pandas/index.php)
- [Python nltk exercises](https://www.w3resource.com/python-exercises/nltk/index.php)
- [Python BeautifulSoup exercises](https://www.w3resource.com/python-exercises/BeautifulSoup/index.php)
- [Form Template](https://www.w3resource.com/form-template/)
- [Composer - PHP Package Manager](https://www.w3resource.com/php/composer/a-gentle-introduction-to-composer.php)
- [PHPUnit - PHP Testing](https://www.w3resource.com/php/PHPUnit/a-gentle-introduction-to-unit-test-and-testing.php)
- [Laravel - PHP Framework](https://www.w3resource.com/laravel/laravel-tutorial.php)
- [Angular - JavaScript Framework](https://www.w3resource.com/angular/getting-started-with-angular.php)
- [React - JavaScript Library](https://www.w3resource.com/react/react-js-overview.php)
- [Vue - JavaScript Framework](https://www.w3resource.com/vue/installation.php)
- [Jest - JavaScript Testing Framework](https://www.w3resource.com/jest/jest-getting-started.php)

---

<span class="underline"></span>

<span class="underline"></span>

<span class="underline"></span>

[This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

©w3resource.com 2011-2021

- [Privacy](https://www.w3resource.com/privacy.php)
- [About](https://www.w3resource.com/about.php)
- [Contact](https://www.w3resource.com/contact.php)
- [Feedback](https://www.w3resource.com/feedback.php)
- [Advertise](https://www.w3resource.com/advertise.php)
