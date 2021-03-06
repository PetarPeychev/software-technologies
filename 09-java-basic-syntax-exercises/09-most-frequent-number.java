import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] val = Arrays.stream(scan.nextLine().split("\\s+")).map(Integer::parseInt)
                .mapToInt(i -> i).toArray();

        int count = 0;
        int num = val[0];
        int maxCount = 0;

        for (int i = 0; i < val.length; i++) {
            for (int j = i + 1; j < val.length; j++) {

                if (val[i] == val[j]) {
                    count++;

                    if (count > maxCount) {
                        num = val[i];
                        maxCount = count;
                    }
                }
            }
            count = 0;
        }
            System.out.print(num);
    }
}
