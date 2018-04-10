import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        char[] inputArray = new char[3];
        inputArray[0] = console.nextLine().charAt(0);
        inputArray[1] = console.nextLine().charAt(0);
        inputArray[2] = console.nextLine().charAt(0);

        for (int i = 2; i >= 0; i--) {
            System.out.print(inputArray[i]);
        }
    }

}
