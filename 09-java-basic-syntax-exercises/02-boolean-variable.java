import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String input = console.nextLine();
        Boolean output = Boolean.parseBoolean(input);
        if (output) System.out.println("Yes");
        else System.out.println("No");
    }

}
