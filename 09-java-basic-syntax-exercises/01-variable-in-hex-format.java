import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String input = console.nextLine();
        int output = Integer.parseInt(input, 16);
        System.out.println(output);
    }

}
