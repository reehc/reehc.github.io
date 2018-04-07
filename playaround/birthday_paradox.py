#! /usr/bin/python3

import numpy as np
import matplotlib.pyplot as plt
import math

U = 10 ** 2

def multiply_between(a, b):
	distance = abs(a - b) + 1
	begin = min(a, b)
	ret = 1
	for i in range(distance):	
		ret *= begin + i
	return ret

def inv_birthday(total, sample):
	if sample < 2:
		return 1.0
	elif sample <= total:
		return multiply_between(total-1, total-sample+1) / (total ** (sample - 1))
	else:
		return 0.0

# TODO: what is the approximation of x when prob is near to 100%
x = np.arange(0, 5000, 1.)

y = x.copy()
for i in range(x.shape[0]):
	y[i] = 1 - inv_birthday(U, int(x[i]))

# at x=1.2*sqrt(U), 50% probability of collision
x_sp = int(1.2 * math.sqrt(U))
y_sp = 1 - inv_birthday(U, x_sp)
print(x_sp, y_sp)
plt.plot(x_sp, y_sp, 'ro')

plt.plot(x, y)
plt.xlabel("# samples n")
plt.ylabel("collision probability")
plt.show()
