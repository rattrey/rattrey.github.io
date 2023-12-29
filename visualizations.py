import matplotlib.pyplot as plt
import numpy as np

# Creating data for supply and demand curves
quantity = np.arange(0, 100)
demand = 100 - quantity  # Example demand curve
supply = quantity  # Example supply curve

# Finding the equilibrium point
equilibrium_price = np.argwhere(np.diff(np.sign(demand - supply)) != 0).reshape(-1) + 0
equilibrium_quantity = quantity[equilibrium_price]

# Creating the plot
plt.figure(figsize=(10, 6))
plt.plot(quantity, demand, label='Demand Curve', color='blue')
plt.plot(quantity, supply, label='Supply Curve', color='green')

# Annotating the equilibrium point
plt.scatter(equilibrium_quantity, equilibrium_price, color='red')
plt.text(equilibrium_quantity, equilibrium_price, f'  Equilibrium Point ({equilibrium_quantity[0]}, {equilibrium_price[0]})', 
         verticalalignment='bottom', horizontalalignment='left')

# Setting the title and labels
plt.title('Supply and Demand Curve')
plt.xlabel('Quantity')
plt.ylabel('Price')
plt.legend()

# Adding grid for better readability
plt.grid(True)

# Showing the plot
plt.show()
