import java.util.Random;
public class Shuffle {
    public static void main(String[] args) {
        int[] org = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(org);

        System.out.print("Shuffled Array: ");
        for ( int i : org) {
            System.out.print(i+" ");
        }
    }

    public static void shuffleArray(int[] array) {
        Random rand = new Random();

        for (int i = array.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);

            // Swap array[i] and array[j]
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
